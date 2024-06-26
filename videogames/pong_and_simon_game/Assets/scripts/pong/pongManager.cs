/*
 * Game Manager for Pong demo
 * 
 * NIcole D�vila
 * 10-4-2024
 */

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
// Neceessary to display text in the UI
using TMPro; // text mesh pro

public class pongManager : MonoBehaviour
{

    [SerializeField] GameObject ball;
    [SerializeField] GameObject ballPrefab;
    [SerializeField] float speed;

    [SerializeField] TMP_Text scoreLeft;
    [SerializeField] TMP_Text scoreRight;

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
            Reset();
        }
    }

    public void Reset()
    { 
        // checks that there is a ball
        if (ball != null)
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
            scoreLeft.text = pointsLeft.ToString();
            InitGame();
        } else if (side == "right")
        {
            pointsRight++;
            scoreRight.text = pointsRight.ToString();
            InitGame();
        }
    }
}
