/*
 * Game Manager for Pong demo
 * 
 * NIcole Dávila
 * 10-4-2024
 */

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class pongManager : MonoBehaviour
{

    [SerializeField] GameObject ball;
    [SerializeField] GameObject ballPrefab;
    [SerializeField] float speed;

    public int pointsLeft;
    public int pointsRight;

    // Start is called before the first frame update
    void Start()
    {
        InitGame();
    }

    // Update is called once per frame
    private void Update()
    {
        if (Input.GetKeyDown(KeyCode.R) && ball != null) 
        {
            Destroy(ball);
            InitGame();
        }
    }

    // Starts a new game
    void InitGame()
    {
        StartCoroutine(ServeBall());
    }

    IEnumerator ServeBall()
    {
        yield return new WaitForSeconds(1.0f);
        ball = Instantiate(ballPrefab);
        ball.GetComponent<Rigidbody2D>().velocity = Random.insideUnitCircle.normalized * speed;
     }

    // Increase the score of the specified player

    public void Score(string side)
    {
        if (side == "left")
        {
            pointsLeft++;
            InitGame();
        } else if (side == "right")
        {
            pointsRight++;
            InitGame();
        }
    }
}
