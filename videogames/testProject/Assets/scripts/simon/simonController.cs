/*
 * Manages the flow of the game
 * 
 * Nicole Dávila
 * 24-04-2024
 */

using System.Collections;
using System.Collections.Generic;
using System.Diagnostics.Tracing;
using UnityEngine;
using UnityEngine.UI;

public class simonController : MonoBehaviour
{

    [SerializeField] List<simonButton> buttons;
    [SerializeField] List<int> sequence;
    [SerializeField] float delay;
    [SerializeField] int level;
    [SerializeField] int counter;
    [SerializeField] bool playerTurn = false;

    // Start is called before the first frame update
    void Start()
    {
        // Configures the buttons to be used in the game
        PrepareButtons();
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    void PrepareButtons()
    {
        for (int i = 0; i < buttons.Count; i++)
        {
            int index = i;
            buttons[i].gameObject.GetComponent<Button>().onClick.AddListener(() => ButtonPressed(index));
        }
    }

    public void ButtonPressed(int index)
    {
        if (playerTurn)
        {
            if (index == sequence[counter])
            {
                if (counter == sequence.Count)
                {
                    AddToSequence();
                }
            } else
            {
                Debug.Log("womp womp game over");
            }
        }
    }

    void AddToSequence()
    {
        // Adds a new button to the sequence
        sequence.Add(Random.Range(0, buttons.Count));
        StartCoroutine(PlaySequence());
    }

    IEnumerator PlaySequence()
    {
        foreach (int index in sequence)
        {
            buttons[index].Highlight();
            yield return new WaitForSeconds(delay);
        }
        playerTurn = true;
    }
}
